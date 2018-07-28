import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Tabs } from 'ionic-angular';
import { MemberPage } from './member/member';

@IonicPage()
@Component({
  selector: 'page-team-members',
  templateUrl: 'team-members.html',
})
export class TeamMembersPage {
  member:any = 'MemberPage';
  @ViewChild('teamTab') tabRef: Tabs;
  tabs = [
    {
      name: 'Cosima Paul',
      designation: 'Head Analyst',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam felis, posuere ut massa nec, sagittis ultrices mauris. Nullam aliquet egestas urna vel luctus. Aliquam varius orci vel est lacinia, vel rhoncus dolor varius. Donec euismod nibh commodo ornare viverra. Morbi convallis odio a lacus posuere, sed pharetra sem suscipit. Praesent et lectus vel nunc sagittis semper. Ut pharetra tortor ut urna interdum fringilla. Suspendisse maximus gravida tempus. Donec vitae nulla sit amet diam consectetur ultrices. Vestibulum id enim tortor.\n' +
          '\n' +
          'Donec aliquet, neque eu elementum pellentesque, nisi leo aliquam ex, eget lacinia ligula leo vitae urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc mollis leo ut sollicitudin lacinia. Pellentesque in orci erat. In volutpat purus vel mi auctor varius. In condimentum finibus dui quis consequat. Quisque placerat quam a placerat tincidunt. Maecenas id nulla nulla. Curabitur a sollicitudin nisl, congue tempus nulla. Aliquam erat volutpat.',
      image: 'assets/img/avatar/cosima-avatar.jpg'
    },
    {
      name: 'Sarah Singh',
      designation: 'Consulting Analyst',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam felis, posuere ut massa nec, sagittis ultrices mauris. Nullam aliquet egestas urna vel luctus. Aliquam varius orci vel est lacinia, vel rhoncus dolor varius. Donec euismod nibh commodo ornare viverra. Morbi convallis odio a lacus posuere, sed pharetra sem suscipit. Praesent et lectus vel nunc sagittis semper. Ut pharetra tortor ut urna interdum fringilla. Suspendisse maximus gravida tempus.',
      image: 'assets/img/avatar/sarah-avatar.jpg'
    },
    {
      name: 'Marty Nandy',
      designation: 'TECHNICAL ASSOCIATE.',
      about: 'Ut nec leo ornare, ultricies nisl quis, egestas sem. Vivamus bibendum imperdiet odio at tristique. Nam scelerisque fringilla sem nec imperdiet. Suspendisse sed diam libero. Mauris ultrices quam at ex vestibulum, ut facilisis ante hendrerit. Aliquam nisl ex, volutpat sed pharetra at, posuere non elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed consequat tincidunt interdum. Vivamus lectus dui, posuere sit amet aliquam id, dapibus sit amet tellus. Suspendisse potenti. Donec blandit ipsum nec tempus cursus. Donec in ullamcorper lacus. Sed sed neque porttitor dui facilisis convallis in in arcu.\n' +
          '\n' +
          'Fusce posuere purus nec libero porttitor porttitor. Fusce gravida, nibh eget commodo eleifend, leo orci maximus nunc, non pretium arcu sem sed metus. Phasellus non convallis eros. Sed rhoncus metus et cursus ultrices. Morbi imperdiet id magna ut commodo. Suspendisse potenti. Phasellus quis malesuada dui. Mauris euismod venenatis ipsum, et imperdiet sem aliquam a. Donec consectetur nisl et condimentum porttitor. In porta ultricies fringilla. Morbi tempor fringilla est, eget aliquam dolor eleifend non.\n' +
          '\n' +
          'Donec interdum ultrices risus vitae interdum. Aenean in semper quam. Maecenas faucibus dictum urna, eget tempus metus congue vitae. Nunc eget magna est. Nunc ornare est ut orci tincidunt iaculis. Maecenas condimentum, elit in laoreet facilisis, tellus erat auctor felis, faucibus tincidunt sapien turpis non ipsum. Vestibulum ultrices lorem ac scelerisque aliquet. Maecenas varius justo nec mi sodales pellentesque at sit amet ligula. Nulla eget finibus ipsum. Etiam sit amet quam at turpis scelerisque suscipit. Phasellus dolor arcu, sollicitudin sed convallis sed, venenatis ut tortor.',
      image: 'assets/img/avatar/marty-avatar.png'
    },
    {
      name: 'Ian Williams',
      designation: 'TECHNICAL ASSOCIATE.',
      about: 'Fusce posuere purus nec libero porttitor porttitor. Fusce gravida, nibh eget commodo eleifend, leo orci maximus nunc, non pretium arcu sem sed metus. Phasellus non convallis eros. Sed rhoncus metus et cursus ultrices. Morbi imperdiet id magna ut commodo. Suspendisse potenti. Phasellus quis malesuada dui. Mauris euismod venenatis ipsum, et imperdiet sem aliquam a. Donec consectetur nisl et condimentum porttitor. In porta ultricies fringilla. Morbi tempor fringilla est, eget aliquam dolor eleifend non.\n' +
          '\n' +
          'Donec interdum ultrices risus vitae interdum. Aenean in semper quam. Maecenas faucibus dictum urna, eget tempus metus congue vitae. Nunc eget magna est. Nunc ornare est ut orci tincidunt iaculis. Maecenas condimentum, elit in laoreet facilisis, tellus erat auctor felis, faucibus tincidunt sapien turpis non ipsum.',
      image: 'assets/img/avatar/ian-avatar.png',
    },
    {
      name: 'Jane Doe',
      designation: 'TECHNICAL ASSOCIATE.',
      about: ' Aenean in semper quam. Maecenas faucibus dictum urna, eget tempus metus congue vitae. Nunc eget magna est. Nunc ornare est ut orci tincidunt iaculis. Maecenas condimentum, elit in laoreet facilisis, tellus erat auctor felis, faucibus tincidunt sapien turpis non ipsum. Vestibulum ultrices lorem ac scelerisque aliquet. Maecenas varius justo nec mi sodales pellentesque at sit amet ligula. Nulla eget finibus ipsum. Etiam sit amet quam at turpis scelerisque suscipit. Phasellus dolor arcu, sollicitudin sed convallis sed, venenatis ut tortor.',
      image: 'assets/img/avatar/girl-avatar.png'
    }
  ];
  constructor(public navCtrl: NavController) {

  }
  ngAfterViewInit() {
    const tabbar = this.tabRef._tabbar.nativeElement;
    for (let i = tabbar.childElementCount-1; i > 0; i--) {
      const element = tabbar.childNodes[i];
      if(element) {
        element.removeChild(element.childNodes[1]);
        const img = document.createElement('img');
        img.setAttribute('class', 'tab-icon-custom tab-button-icon icon icon-md team-icon');
        img.setAttribute('src', this.tabs[i-1].image);
        element.insertBefore(img, element.childNodes[1]);
      }
    }

  }

}
