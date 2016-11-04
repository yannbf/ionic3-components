## Tinder Cards style page

In order to have the cards swipe effect, follow these instructions:

1 - Install Angular-Swing:
`npm install angular2-swing --save`

2 - In `app.module.ts` add the specific import:
`import { SwingModule } from 'angular2-swing';`

And add `SwingModule` to your NgModule:
```@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SwingModule <----------
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})```

3 - follow this tutorial: https://devdactic.com/ionic-2-tinder-cards/