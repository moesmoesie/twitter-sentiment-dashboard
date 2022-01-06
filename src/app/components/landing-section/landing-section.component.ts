import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {
  subTitleText = "Human Computer Interaction"
  headerText = "Twitter Sentiment Dashboard"
  bodyText = "Explore the internets view by at-a-glance positive/neutral/negative tweet sentiment analysis, filter data with custom search operations, and export your newly found insights to a local csv file."

  donwloadData(): void {
    const data = this.store.tweets
    const filteredData = data.map((element) => {
      const newdata: any = {}
      for (const [key, value] of Object.entries(element)) {
        if(key == "entities"){
          continue;
        }
        if(["public_metrics"].includes(key)){
          for (const [nkey, nvalue] of Object.entries(value)) {
            newdata[key + "_" + nkey] = nvalue
          }
        }else{
          newdata[key] = value
        }
      }
      return newdata
    })
    CsvDataService.exportToCsv("TweetSentimentData.csv",filteredData);
  }


  constructor(
    public store: StoreService
  ) { }

  ngOnInit(): void {
  }

}


export class CsvDataService {
  static exportToCsv(filename: string, rows: object[]) {
    if (!rows || !rows.length) {
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map((row: any) => {
        return keys.map((k: any) => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
