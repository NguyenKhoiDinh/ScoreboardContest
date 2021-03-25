import React, { Component } from "react";
import FlipMove from "react-flip-move";
import ListContestant from "./ListContestant";
import Trophy from "./img/award.png";
import { Dark } from "./style";

let status = true;

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: [
        {
          name: "Dinh.Thi.Nguyet.Thanh",
          status: ["-1", "1.00", "-1", "-1", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [-1, -1], [-1], [-1, -1], [-1, -1]],
        },
        {
          name: "Mai.Anh.Quan",
          status: ["-1", "0.00", "-1", "-1", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [0], [-1, -1], [-1], [-1, -1], [-1, -1]],
        },
        {
          name: "Nguyen.Ha.Vy",
          status: ["-1", "1.00", "-1", "-1", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [-1, -1], [-1], [-1, -1], [-1, -1]],
        },
        {
          name: "Nguyen.Quoc.Huy",
          status: ["-1", "0.00", "-1", "-1", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [0], [-1, -1], [-1], [-1, -1], [-1, -1]],
        },
        {
          name: "Vo.Thanh.Nguyen",
          status: ["-1", "0.00", "-1", "-1", "-1", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[-1, -1], [0], [-1, -1], [-1], [-1, -1], [-1, -1]],
        },
        {
          name: "Cao.Huu.Khuong.Duy",
          status: ["2.00", "1.00", "-1", "1.00", "2.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[1, 1], [1], [-1, -1], [1], [1, 1], [-1, -1]],
        },
        {
          name: "Dang.Duy.Lan",
          status: ["-1", "1.00", "-1", "1.00", "0.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[-1, -1], [1], [-1, -1], [1], [0, 0], [-1, -1]],
        },
        {
          name: "Doan.Anh.Quan",
          status: ["-1", "1.00", "-1", "0.00", "0.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [-1, -1], [0], [0, 0], [-1, -1]],
        },
        {
          name: "Hoang.Duc.Dung",
          status: ["-1", "0.00", "0.00", "1.00", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [0], [0, 0], [1], [-1, -1], [-1, -1]],
        },
        {
          name: "Hoang.Ngoc.Dung",
          status: ["-1", "1.00", "1.00", "0.00", "1.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [1, 0], [0], [1, 0], [-1, -1]],
        },
        {
          name: "Huynh.Minh.Trung",
          status: ["0.00", "1.00", "1.00", "1.00", "2.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[0, 0], [1], [1, 0], [1], [1, 1], [-1, -1]],
        },
        {
          name: "Le.Minh.Hung",
          status: ["-1", "0.00", "-1", "1.00", "2.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[-1, -1], [0], [-1, -1], [1], [1, 1], [-1, -1]],
        },
        {
          name: "Nguyen.Gia.Bao",
          status: ["-1", "1.00", "-1", "0.00", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [-1, -1], [0], [-1, -1], [-1, -1]],
        },
        {
          name: "Nguyen.Huy.Phuoc",
          status: ["-1", "1.00", "-1", "0.00", "0.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [-1, -1], [0], [0, 0], [-1, -1]],
        },
        {
          name: "Nguyen.Le.Duy.Thinh",
          status: ["-1", "1.00", "2.00", "0.00", "1.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[-1, -1], [1], [1, 1], [0], [1, 0], [-1, -1]],
        },
        {
          name: "Nguyen.Minh.Hieu",
          status: ["-1", "1.00", "1.00", "1.00", "-1", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[-1, -1], [1], [1, 0], [1], [-1, -1], [-1, -1]],
        },
        {
          name: "Nguyen.Ngoc.Tu",
          status: ["0.00", "1.00", "-1", "1.00", "1.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[0, 0], [1], [-1, -1], [1], [1, 0], [-1, -1]],
        },
        {
          name: "Nguyen.Quoc.An",
          status: ["0.00", "1.00", "-1", "0.00", "1.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[0, 0], [1], [-1, -1], [0], [1, 0], [-1, -1]],
        },
        {
          name: "Nguyen.Tai.Phu",
          status: ["-1", "1.00", "-1", "0.00", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [1], [-1, -1], [0], [-1, -1], [-1, -1]],
        },
        {
          name: "Nguyen.Thanh.Phat",
          status: ["-1", "1.00", "1.00", "1.00", "1.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[-1, -1], [1], [1, 0], [1], [1, 0], [-1, -1]],
        },
        {
          name: "Phan.Ba.Duc",
          status: ["0.00", "1.00", "-1", "0.00", "1.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[0, 0], [1], [-1, -1], [0], [1, 0], [-1, -1]],
        },
        {
          name: "Phan.Minh.Quang",
          status: ["1.00", "1.00", "2.00", "1.00", "2.00", "-1"],
          totalScore: 0,
          grade: 12,
          score: [[1, 0], [1], [1, 1], [1], [1, 1], [-1, -1]],
        },
        {
          name: "Phan.Nam.Thanh",
          status: ["0.00", "1.00", "-1", "1.00", "-1", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[0, 0], [1], [-1, -1], [1], [-1, -1], [-1, -1]],
        },
        {
          name: "Tran.Dang.Minh.Quan",
          status: ["-1", "0.00", "-1", "-1", "1.00", "-1"],
          totalScore: 0,
          grade: 11,
          score: [[-1, -1], [0], [-1, -1], [-1], [1, 0], [-1, -1]],
        },
      ],
      mark: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      contest: {
        contestName: "Summer Contest 2021",
        name: ["SC1", "SC2", "SC3", "SC4", "SC5", "SC6"],
        points: [[17, 18], [27], [14, 24], [25], [13, 17], [13, 32]],
      },
      light: true,
      enterLeaveAnimation: "elevator",
    };
  }
  findPoint = (data) => {
    let newmark = this.state.mark;
    let flag = true;
    for (let i = data.length - 1; i >= 0; i--) {
      let element = data[i];
      for (let j = 0; j < element.score.length; j++) {
        for (let k = 0; k < element.score[j].length; k++) {
          if (element.score[j][k] === 0 || element.score[j][k] === 1) {
            newmark[i] = 1;
            flag = false;
            break;
          }
          if (flag === false) {
            break;
          }
        }
      }
      if (flag === false) {
        break;
      }
    }
    status = false;
    this.setState({
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
                contestant.score[j][k] += 2;
                if (contestant.score[j][k] === 3) {
                  contestant.totalScore += points[cnt];
                }
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
    // @hungphongbk wtf are u doing, why interact with pure DOM like this in ReactJS?
    // for (let i = 0; i < newdata.length; i++) {
    //   var e = document.getElementById(newdata[i].name);
    //   if (e) {
    //     e.style.zIndex = 1000 - i;
    //   }
    // }
    status = true;
    this.setState({
      result: newdata,
      mark: newmark,
    });
  };
  renderResult = (data) => {
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
    } = Dark;
    let colorRow = true;
    const trophy = <img src={Trophy} alt="trophy" height={20} width={23}></img>;
    return data.map((element, id) => {
      let flag = this.state.mark[id];
      let isPending = flag;
      colorRow = !colorRow;
      let name, rank, score, ans, trophyy;
      if (isPending === 1) {
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
        trophyy =
          element.totalScore > 0 ? (
            <td
              style={{
                ...styleTrophy,
                borderTop: "1px solid #537acd",
                borderBottom: "1px solid #537acd",
              }}
            >
              {element.rank === 1 ? trophy : ""}
            </td>
          ) : (
            <td
              style={{
                ...styleTrophy,
                borderTop: "1px solid #537acd",
                borderBottom: "1px solid #537acd",
              }}
            ></td>
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
        trophyy =
          element.totalScore > 0 ? (
            <td style={{ ...styleTrophy }}>
              {element.rank === 1 ? trophy : ""}
            </td>
          ) : (
            <td style={{ ...styleTrophy }}></td>
          );
      }
      ans = element.score.map((SS) => {
        return SS.map((sc) => {
          if (sc === -1) {
            if (isPending === 1) {
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
            if (isPending === 1) {
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
            if (isPending === 1) {
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
          {trophyy}
          {rank}
          {score}
          {ans}
        </tr>
      );
    });
  };
  render() {
    const { styleProblem, styleSubProblem, styleContestName } = Dark;

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
      width: "77%",
      float: "left",
      height: "100%",
      display: "inline-block",
    };
    const secondPart = {
      width: "20%",
      float: "right",
      height: "100%",
      display: "inline-block",
      align: "center",
    };
    return (
      <div>
        <div style={firstPart}>
          <table
            cellSpacing="1"
            style={styleTable}
            onClick={() =>
              status === true ? this.findPoint(data) : this.judge(data)
            }
          >
            <tbody>
              <FlipMove
                staggerDurationBy={50}
                duration={3500}
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
          {/* <div style={styleLogo}>
              <img src={TopAlgoLogo} alt="TopAlgoLogo" width={200} height={180} />
          </div> */}
          <ListContestant data={data} theme={this.props.theme} />
        </div>
      </div>
    );
  }
}
export default App;
