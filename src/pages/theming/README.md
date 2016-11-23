## Theming your app

Many thanks to [Scott](https://github.com/ScottMBerger) for this feature! 
To do so, there are a few easy steps you'd have to follow:

### HTML
To theme your app(sidemenu or tabs), wrap your whole app.html with a div like:

```html 
<div class="{{global.state['theme']}}">
    // app.html code...
</div>
```
 
### CSS
After that, create your own theme files in `src/theme/`. [Take a look](https://github.com/yannbf/ionic2-components/blob/master/src/theme/dark.theme.scss) at one of the examples used in this repo.

Finally, you import your theme in  `app.scss` adding one line as:
```css
@import '../theme/dark.theme';
```

### Typescript
Lastly, you need a way that you can dinamically set the theme class whenever you want to. In this repo, I used a [Global State Class](https://github.com/yannbf/ionic2-components/blob/master/src/app/app.global.ts) so I could set my variables in whichever page I want.

To do so, just add this to the class that will change the app's theme:
```javascript
  constructor(public navCtrl: NavController, public global: AppState) { }
  changeTheme(theme) {
    this.global.set('theme', theme);
  }
``` 

From there is just joy and happiness :tada: :tada: