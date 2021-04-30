import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Trophy from "./img/champion.png";
import GoldMedal from "./img/gold-medal.png";
import SilverMedal from "./img/silver-medal.png";
import BronzeMedal from "./img/bronze-medal.png";
import { Dark } from "./style";
import InfoCard from "./InfoCard";
import { emptyArray } from "./style";
import { data } from "./data";

let status = true;

class App extends Component {
  constructor() {
    super();
    this.state = {
      profileInfo: {
        name: "",
        rank: 0,
        status: "",
        score: 0,
        urlImage: "https://i.imgur.com/9cATnWK.png",
      },
      isShowing: false,
      positionShowing: -1,
      result: data,
      mark: emptyArray,
      isShow: emptyArray,
      contest: {
        contestName: "Summer Contest 2021",
        name: ["SC1", "SC2", "SC3", "SC4", "SC5", "SC6"],
        points: [[17, 18], [27], [14, 24], [25], [13, 17], [13, 32]],
      },
      light: true,
      enterLeaveAnimation: "elevator",
    };
  }
  rearrangeData = (data) => {
    let ret = data;
    if (!ret) {
      return [];
    }
    ret[0].rank = 1;
    for (let i = 1; i < ret.length; i++) {
      if (ret[i].totalScore === ret[i - 1].totalScore) {
        ret[i].rank = ret[i - 1].rank;
      } else {
        ret[i].rank = i + 1;
      }
    }
    let cntYoung = 0,
      cntOld = 0;
    let curScoreYoung = 0,
      curScoreOld = 0,
      curRankYoung = 0,
      curRankOld = 0;
    for (let i = 0; i < ret.length; i++) {
      if (ret[i].totalScore > 0) {
        if (ret[i].grade === 12) {
          cntOld++;
          if (curScoreOld !== ret[i].totalScore) {
            curScoreOld = ret[i].totalScore;
            curRankOld = cntOld;
          }
        } else if (ret[i].grade === 11) {
          cntYoung++;
          if (curScoreYoung !== ret[i].totalScore) {
            curScoreYoung = ret[i].totalScore;
            curRankYoung = cntYoung;
          }
        }
      }
      if (ret[i].totalScore === 0) {
        ret[i].award = "none";
        continue;
      }
      if (ret[i].rank === 1) {
        ret[i].award = "trophy";
      } else if (ret[i].grade === 12) {
        if (curRankOld === 1) {
          ret[i].award = "gold";
        } else if (curRankOld === 2) {
          ret[i].award = "silver";
        } else if (curRankOld === 3) {
          ret[i].award = "bronze";
        } else {
          ret[i].award = "none";
        }
      } else if (ret[i].grade === 11) {
        if (curRankYoung === 1) {
          ret[i].award = "gold";
        } else if (curRankYoung === 2) {
          ret[i].award = "silver";
        } else if (curRankYoung === 3) {
          ret[i].award = "bronze";
        } else {
          ret[i].award = "none";
        }
      }
    }
    return ret;
  };
  checkScore = (score) => {
    for (let i = 0; i < score.length; i++) {
      for (let j = 0; j < score[i].length; j++) {
        if (score[i][j] === 0 || score[i][j] === 1) {
          return false;
        }
      }
    }
    return true;
  };
  findPoint = (data) => {
    let newmark = this.state.mark;
    let info = {};
    for (let i = data.length - 1; i >= 0; i--) {
      let element = data[i];
      if (this.checkScore(element.score) === false) {
        newmark[i] = 1;
        info.name = data[i].name;
        info.rank = data[i].rank;
        info.score = data[i].totalScore;
        info.urlImage = data[i].linkUrl;
        info.award = data[i].award;
        break;
      }
    }
    status = false;
    info.status = "Pending";
    this.setState({
      profileInfo: info,
      mark: newmark,
    });
  };
  judge = (data) => {
    let newmark = this.state.mark;
    let newdata = data;
    let points = [];
    this.state.contest.points.forEach((element) => {
      element.forEach((sc) => {
        points = [...points, sc];
      });
    });
    let temp, pos;
    let info = {};
    for (let i = newdata.length - 1; i >= 0; i--) {
      if (newmark[i] === 1) {
        let cnt = 0;
        let flag = true;
        let contestant = newdata[i];
        temp = contestant;
        pos = i;
        for (let j = 0; j < contestant.score.length; j++) {
          for (let k = 0; k < contestant.score[j].length; k++) {
            if (contestant.score[j][k] === 0 || contestant.score[j][k] === 1) {
              if (flag === true) {
                flag = false;
                if (contestant.score[j][k] === 0) {
                  info.status = "Incorrect";
                } else {
                  info.status = "Correct";
                }
                info.name = contestant.name;
                contestant.score[j][k] += 2;
                if (contestant.score[j][k] === 3) {
                  contestant.totalScore += points[cnt];
                }
                info.score = contestant.totalScore;
              }
            }
            cnt++;
          }
        }
        newdata[i] = contestant;
      }
    }
    let poss = pos;
    for (let i = pos; i >= 1; i--) {
      if (newdata[i - 1].totalScore < temp.totalScore) {
        newdata[i] = newdata[i - 1];
        poss = i - 1;
      }
    }
    newdata[poss] = temp;
    newmark[pos] = 0;
    status = true;
    newdata = this.rearrangeData(newdata);
    for (let i = 0; i < newdata.length; i++) {
      if (newdata[i].name === info.name) {
        info.rank = newdata[i].rank;
        info.award = newdata[i].award;
        info.urlImage = newdata[i].linkUrl;
        info.score = newdata[i].totalScore;
      }
    }
    this.setState({
      profileInfo: info,
      result: newdata,
      mark: newmark,
    });
  };
  process = (data) => {
    if (this.state.isShowing === true) {
      let newIsShowing = false;
      this.setState({
        isShowing: newIsShowing,
      });
      return;
    }
    let newIsShow = this.state.isShow;
    let pos = -1;
    for (let i = data.length - 1; i >= 0; i--) {
      if (this.checkScore(data[i].score) === false) {
        break;
      }
      if (newIsShow[i] === 0 && data[i].totalScore > 0) {
        pos = i;
        break;
      }
    }
    if (pos !== -1) {
      let flag = true;
      for (let j = 0; j < pos; j++) {
        if (
          this.checkScore(data[j].score) === false &&
          data[j].rank === data[pos].rank
        ) {
          flag = false;
          break;
        }
      }
      if (flag === true) {
        newIsShow[pos] = 1;
        let info = {};
        let newIsShowing = true;
        info.name = data[pos].name;
        info.rank = data[pos].rank;
        info.status = "Stopped";
        info.score = data[pos].totalScore;
        info.award = data[pos].award;
        info.urlImage = data[pos].linkUrl;
        this.setState({
          positionShowing: pos,
          isShowing: newIsShowing,
          profileInfo: info,
          isShow: newIsShow,
        });
        return;
      }
    }
    status === true ? this.findPoint(data) : this.judge(data);
  };
  renderResult = (processData) => {
    const {
      styleName,
      styleNamePending,
      styleCorrect,
      styleQuestion,
      styleQuestionPending,
      styleRank,
      styleScore,
      styleTrophy,
      styleUnScore,
      styleWrongAnswer,
      styleShowing,
    } = Dark;
    let colorRow = true;
    let data = processData;
    data = this.rearrangeData(data);
    const trophy = <img src={Trophy} alt="trophy" height={20} width={20}></img>;
    const goldMedal = (
      <img src={GoldMedal} alt="goldMedal" height={20} width={23}></img>
    );
    const silverMedal = (
      <img src={SilverMedal} alt="silverMedal" height={20} width={23}></img>
    );
    const bronzeMedal = (
      <img src={BronzeMedal} alt="bronzeMedal" height={20} width={23}></img>
    );
    return data.map((element, id) => {
      let flag = this.state.mark[id];
      let isShowing = this.state.isShowing;
      let positionShowing = this.state.positionShowing;
      if (positionShowing !== id) {
        isShowing = false;
      }
      if (this.checkScore(element.score) === true) {
        flag = 0;
      }
      let isPending = flag;
      colorRow = !colorRow;
      let name, rank, score, ans, medal;
      let award = "";
      if (element.award === "none") {
        award = "";
      } else if (element.award === "trophy") {
        award = trophy;
      } else if (element.award === "gold") {
        award = goldMedal;
      } else if (element.award === "silver") {
        award = silverMedal;
      } else if (element.award === "bronze") {
        award = bronzeMedal;
      }
      medal =
        element.totalScore > 0 ? (
          <td style={styleTrophy}>{award ? award : ""}</td>
        ) : (
          <td style={styleTrophy}></td>
        );
      if (isShowing === true) {
        name = (
          <td id={element.name} style={{ ...styleShowing }}>
            {element.name}
          </td>
        );
        rank = (
          <td
            style={{
              ...styleRank,
              borderTop: "1px solid rgb(55, 146, 62)",
              borderBottom: "1px solid rgb(55, 146, 62)",
            }}
          >
            {element.rank}
          </td>
        );
        score = (
          <td
            style={{
              ...styleScore,
              borderTop: "1px solid rgb(55, 146, 62)",
              borderBottom: "1px solid rgb(55, 146, 62)",
            }}
          >
            {element.totalScore}
          </td>
        );
        medal = (
          <td
            style={{
              ...styleTrophy,
              borderTop: "1px solid rgb(55, 146, 62)",
              borderBottom: "1px solid rgb(55, 146, 62)",
            }}
          >
            {element.totalScore > 0 ? (award ? award : "") : ""}
          </td>
        );
      } else if (isPending === 1) {
        name = (
          <td id={element.name} style={{ ...styleNamePending }}>
            {element.name}
          </td>
        );
        rank = (
          <td
            style={{
              ...styleRank,
              borderTop: "1px solid #537acd",
              borderBottom: "1px solid #537acd",
            }}
          >
            {element.rank}
          </td>
        );
        score = (
          <td
            style={{
              ...styleScore,
              borderTop: "1px solid #537acd",
              borderBottom: "1px solid #537acd",
            }}
          >
            {element.totalScore}
          </td>
        );
        medal = (
          <td
            style={{
              ...styleTrophy,
              borderTop: "1px solid #537acd",
              borderBottom: "1px solid #537acd",
            }}
          >
            {element.totalScore > 0 ? (award ? award : "") : ""}
          </td>
        );
      } else {
        name = (
          <td id={element.name} style={{ ...styleName }}>
            {" "}
            {element.name}
          </td>
        );
        rank = <td style={{ ...styleRank }}>{element.rank}</td>;
        score = <td style={{ ...styleScore }}>{element.totalScore}</td>;
      }
      ans = element.score.map((SS) => {
        return SS.map((sc) => {
          if (sc === -1) {
            if (isShowing === true) {
              return (
                <td
                  style={{
                    ...styleUnScore,
                    borderTop: "1px solid rgb(55, 146, 62)",
                    borderBottom: "1px solid rgb(55, 146, 62)",
                  }}
                >
                  .
                </td>
              );
            } else if (isPending === 1) {
              return (
                <td
                  style={{
                    ...styleUnScore,
                    borderTop: "1px solid #537acd",
                    borderBottom: "1px solid #537acd",
                  }}
                >
                  .
                </td>
              );
            } else {
              return <td style={{ ...styleUnScore }}>.</td>;
            }
          } else if (sc === 2) {
            if (isShowing === true) {
              return (
                <td
                  style={{
                    ...styleWrongAnswer,
                    borderTop: "1px solid rgb(55, 146, 62)",
                    borderBottom: "1px solid rgb(55, 146, 62)",
                  }}
                >
                  &#x2718;
                </td>
              );
            } else if (isPending === 1) {
              return (
                <td
                  style={{
                    ...styleWrongAnswer,
                    borderTop: "1px solid #537acd",
                    borderBottom: "1px solid #537acd",
                  }}
                >
                  &#x2718;
                </td>
              );
            } else {
              return <td style={{ ...styleWrongAnswer }}>&#x2718;</td>;
            }
          } else if (sc === 3) {
            if (isShowing === true) {
              return (
                <td
                  style={{
                    ...styleCorrect,
                    borderTop: "1px solid rgb(55, 146, 62)",
                    borderBottom: "1px solid rgb(55, 146, 62)",
                  }}
                >
                  &#x2714;
                </td>
              );
            } else if (isPending === 1) {
              return (
                <td
                  style={{
                    ...styleCorrect,
                    borderTop: "1px solid #537acd",
                    borderBottom: "1px solid #537acd",
                  }}
                >
                  &#x2714;
                </td>
              );
            } else {
              return <td style={{ ...styleCorrect }}>&#x2714;</td>;
            }
          } else {
            if (flag === 1) {
              flag = 0;
              return <td style={{ ...styleQuestionPending }}>&#x3f;</td>;
            } else {
              if (isPending === 1) {
                return (
                  <td
                    style={{
                      ...styleQuestion,
                      borderTop: "1px solid #537acd",
                      borderBottom: "1px solid #537acd",
                    }}
                  >
                    &#x3f;
                  </td>
                );
              } else {
                return <td style={{ ...styleQuestion }}>&#x3f;</td>;
              }
            }
          }
        });
      });
      return (
        <tr
          style={{ height: "12px", position: "relative", zIndex: 1000 - id }}
          key={element.name}
        >
          {name}
          {medal}
          {rank}
          {score}
          {ans}
        </tr>
      );
    });
  };
  render() {
    const { styleProblem, styleSubProblem, styleContestName } = Dark;
    const infoProfile = this.state.profileInfo;
    const contest = this.state.contest;
    let data = this.state.result;
    const styleTable = {
      cursor: "pointer",
    };
    data[0].rank = 1;
    for (let i = 1; i < data.length; i++) {
      if (data[i].totalScore < data[i - 1].totalScore) {
        data[i].rank = i + 1;
      } else {
        data[i].rank = data[i - 1].rank;
      }
    }
    const firstPart = {
      width: "70%",
      float: "left",
      height: "100%",
      display: "inline-block",
    };
    const secondPart = {
      width: "25%",
      float: "right",
      height: "100%",
      display: "inline-block",
      marginTop: "3px",
    };
    return (
      <React.Fragment>
        <div style={{ paddingTop: "3px" }}>
          <div style={firstPart}>
            <table
              cellSpacing="1"
              style={styleTable}
              onClick={() => this.process(data)}
            >
              <tbody>
                <FlipMove
                  staggerDurationBy={50}
                  duration={1500}
                  delay={30}
                  style={{
                    position: "absolute",
                  }}
                >
                  <tr key="z">
                    <td
                      colSpan={4}
                      rowSpan={2}
                      align="left"
                      style={styleContestName}
                    >
                      <h3>{contest.contestName}</h3>
                    </td>
                    {contest.name.map((element, index) => (
                      <td
                        key={index}
                        colSpan={contest.points[index].length}
                        style={styleProblem}
                      >
                        {element}
                      </td>
                    ))}
                  </tr>
                  <tr key="x">
                    {contest.points.map((element) => {
                      return element.map((value, index) => (
                        <td key={index} style={styleSubProblem}>
                          {value}
                        </td>
                      ));
                    })}
                  </tr>
                  {this.renderResult(data)}
                </FlipMove>
              </tbody>
            </table>
          </div>
          <div style={secondPart}>
            <InfoCard infoProfile={infoProfile} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
