import React from 'react';
import MenuBar from '../common/components/MenuBar/MenuBar.jsx';
import MainContents from '../common/components/MainContents/MainContents.jsx';
import Footer from '../common/components/Footer/Footer.jsx';
import './AppsPage.scss';

export default class AppsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar />
        <MainContents>
          <h2>Weight & BMI Tracker</h2>
          <p>The most challenging part of loosing and maintaining your weight is properly keeping track of it. This app will not only let you log your weight, but it will also help you by calculating your BMI and other weight management stats.</p>
          <a href="http://itunes.apple.com/app/id900996996" target="_blank"><img className="app-store" /></a>
          <h2>TravelCountant - Simple Travel Expense Keeper</h2>
          <p>If you want a simple solution for keeping track of your expenses during a vacation trip, or you want to keep track of your expenses for a project your working on, this is the app for you.</p>
          <p>You can make multiple 'Pockets' in this app, a pocket is like an account, it defines the name of the trip/project, the amount that you have reserved for using with this endeavor, and the start date. You can then go about logging your expenses within each 'Pocket'. The expenses will be organized by day and at the bottom of each day you will be able to view the amount spent during that day and the amount remaining (balance carried forward).</p>
          <p>Finally, once your trip is over, or your project is complete, you can generate an email with your expenses and send it to your accountant or to yourself to keep it in record.</p>
          <a href="http://itunes.apple.com/app/id905751695" target="_blank"><img className="app-store" /></a>
        </MainContents>
        <Footer />
      </div>
    );
  }
}