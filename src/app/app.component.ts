import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {environment} from './environment';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  news = [
      {
        "headline": "Students that take Latin have better chance of summoning demon later in life",
        "fake": true
      },
      {
        "headline": "Trump Ties Thousands of Balloons to White House Roof In Attempt to Sail Away From Impeachement Inquiery",
        "fake": true
      },
      {
        "headline": "Obsessed fan find Japanese idol's home by zooming into her eyes",
        "fake": true
      },
      {
        "headline": "Study Finds Fewer Americans Believe in Snoopy",
        "fake": true
      },
      {
        "headline": "Trump Flees Government Oppression By Relocating Administration To Remote Cabin Compound In Mountains Of Idaho",
        "fake": true
      },
      {
        "headline": "Bus Tour Takes Fans Down Iconic ‘Joker’ Stairs",
        "fake": true
      },
      {
        "headline": "Kidnapper Pleasantly Surprised To Find Word ‘Ransom’ In Magazine He Cutting Letters Out Of",
        "fake": true
      },
      {
        "headline": "Secret Service Opens Fire On Section Of Slippery Floor That Attempted To Take Out President Carter",
        "fake": true
      },
      {
        "headline": "Aww: Animal Experts Are Saying Cats Really Do Miss Their Owners If That’s What You Need To Hear",
        "fake": true
      },
      {
        "headline": "Mark Zuckerberg Announces All Of Facebook’s Future Decisions Will Be Made By The Cube Of Justice",
        "fake": true
      },
      {
        "headline": "Roaming Russian eagles leave scientists broke",
        "fake": false
      },
      {
        "headline": "Man charged with DWI after alcohol-fermenting yeast in his gut got him wasted",
        "fake": false
      },
      {
        "headline": "Scientists Taught Rats to Drive Tiny Cars to Earn Froot Loops",
        "fake": false
      },
      {
        "headline": "A RoboCop, a park and a fight: How expectations about robots are clashing with reality",
        "fake": false
      },
      {
        "headline": "City hopes 'Baby Shark' song will drive homeless from park",
        "fake": false
      },
      {
        "headline": "'Perverts in bushes' are ruining nude zone in Paris park, say naturists",
        "fake": false
      },
      {
        "headline": "Bangladeshi MP allegedly hired eight lookalikes to take her place in exams",
        "fake": false
      },
      {
        "headline": "Children over 12 face jail time for trick-or-treating in some towns",
        "fake": false
      },
      {
        "headline": "Student Hacked Into Downingtown Area School District System To Gain Competitive Advantage In Water Gun Fight, Officials Say",
        "fake": false
      },
      {
        "headline": "‘Most ridiculous thing ever’: Officials split building in two to solve property dispute",
        "fake": false
      },
      {
        "headline": "‘You’re just jealous of my eyebrows,’ Trudeau tells crying baby",
        "fake": false
      },
      {
        "headline": "Driver pulls gun in effort to get another driver to 'chill'",
        "fake": true
      },
      {
        "headline": "Senators call for assessment of TikTok's national security risks",
        "fake": true
      }
  ]

 shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  stack = [];
  count = 0;
  correct = 0;
  game_length = 7;
  current;
  
  constructor(private router: Router,  public dialog: MatDialog, private http:HttpClient) {}
 

  next(answer){
    this.count++;
    this.current.answer = answer ? "FAKE" : "REAL";
    if(this.count < this.game_length){
        answer === this.current.fake ? this.correct++: this.correct+=0;
        this.current = this.news.pop();
        
        this.stack.push(this.current);
    }
  }

  reset(){
    this.count = 0;
    this.correct = 0;
    this.news = [...this.stack];
    this.stack = [];
    this.shuffleArray(this.news);
    this.current = this.news.pop();
    this.stack.push(this.current);
  }

 ngOnInit(){
    this.shuffleArray(this.news);
    this.current = this.news.pop();
    this.stack.push(this.current);
 }


}