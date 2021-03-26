import React, { Component } from "react";
import Old from "./Old";
import Young from "./Young";
import Gold from "./img/gold-medal.png";
import Silver from "./img/silver-medal.png";
import Bronze from "./img/bronze-medal.png";

class ListContestant extends Component {
  constructor() {
    super();
    this.state = {
      young: [],
      old: [],
    };
  }
  createTop = () => {
    const gold = <img src={Gold} alt="gold-medal" height={25} width={25}></img>;
    const silver = (
      <img src={Silver} alt="silver-medal" height={25} width={25}></img>
    );
    const bronze = (
      <img src={Bronze} alt="bronze-medal" height={25} width={25}></img>
    );
    const data = this.props.data;
    let newDataYoung = [];
    let newDataOld = [];
    let tmpOld = [];
    let tmpYoung = [];
    data.forEach((element) => {
      if (element.grade === 11) {
        newDataYoung = [...newDataYoung, element];
      } else {
        newDataOld = [...newDataOld, element];
      }
    });
    if (newDataOld.length > 0) {
      newDataOld[0].rank = 1;
      newDataOld[0].medal = gold;
      if (newDataOld[0].totalScore > 0) {
        tmpOld = [...tmpOld, newDataOld[0]];
      }
      for (let i = 1; i < newDataOld.length; i++) {
        if (newDataOld[i].totalScore === newDataOld[i - 1].totalScore) {
          newDataOld[i].rank = newDataOld[i - 1].rank;
        } else {
          newDataOld[i].rank = i + 1;
        }
        if (newDataOld[i].totalScore > 0 && newDataOld[i].rank <= 3) {
          if (newDataOld[i].rank === 1) {
            newDataOld[i].medal = gold;
          } else if (newDataOld[i].rank === 2) {
            newDataOld[i].medal = silver;
          } else {
            newDataOld[i].medal = bronze;
          }
          tmpOld = [...tmpOld, newDataOld[i]];
        }
      }
    }
    if (newDataYoung.length > 0) {
      newDataYoung[0].rank = 1;
      newDataYoung[0].medal = gold;
      if (newDataYoung[0].totalScore > 0) {
        tmpYoung = [...tmpYoung, newDataYoung[0]];
      }
      for (let i = 1; i < newDataYoung.length; i++) {
        if (newDataYoung[i].totalScore === newDataYoung[i - 1].totalScore) {
          newDataYoung[i].rank = newDataYoung[i - 1].rank;
        } else {
          newDataYoung[i].rank = i + 1;
        }
        if (newDataYoung[i].totalScore > 0 && newDataYoung[i].rank <= 3) {
          if (newDataYoung[i].rank === 1) {
            newDataYoung[i].medal = gold;
          } else if (newDataYoung[i].rank === 2) {
            newDataYoung[i].medal = silver;
          } else {
            newDataYoung[i].medal = bronze;
          }
          tmpYoung = [...tmpYoung, newDataYoung[i]];
        }
      }
    }
    this.setState({
      young: tmpYoung,
      old: tmpOld,
    });
  };
  componentWillReceiveProps = () => {
    this.createTop();
  };
  render() {
    const space = {
      height: "35px",
    };
    return (
      <div>
        <div style={space}></div>
        <Old data={this.state.old} theme={this.props.theme} />
        <div style={space}></div>
        <Young data={this.state.young} theme={this.props.theme} />
      </div>
    );
  }
}
export default ListContestant;
