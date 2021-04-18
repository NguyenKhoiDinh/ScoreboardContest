import React, { Component } from "react";
import { Card } from "./style";
import Trophy from "./img/award.png";
import GoldMedal from "./img/gold-medal.png";
import SilverMedal from "./img/silver-medal.png";
import BronzeMedal from "./img/bronze-medal.png";
import Like from "./img/like.png";

class InfoCard extends Component {
  render() {
    const { styleCard } = Card;
    const info = this.props.infoProfile;
    const styleInfo = {
      fontWeight: "bold",
      fontSize: "18px",
      color: "white",
      marginLeft: "10px",
    };
    const styleStatus = {
      color: "white",
      borderRadius: "5px",
      fontWeight: "bold",
      fontSize: "12px",
      padding: "2px 6px 2px",
    };
    let colorStatus = "";
    if (info.status === "Correct") {
      colorStatus = "#00a200";
    } else if (info.status === "Incorrect") {
      colorStatus = "#aa0000";
    } else if (info.status === "Pending") {
      colorStatus = "#bfd126";
    } else {
      colorStatus = "rgb(130, 213, 238)";
    }
    let s = `https://i.imgur.com/9cATnWK.png`;
    if (info) {
      s = info.urlImage;
    }
    return (
      <div style={styleCard}>
        <img
          id="avatar"
          src={s}
          alt={info ? info.name : "default"}
          style={{ width: "100%" }}
        ></img>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            color: "white",
            borderBottom: "1px solid rgba(198, 198, 198, 0.13)",
            paddingBottom: "12px",
          }}
        >
          {info ? info.name : "-"}
        </div>
        <table
          style={{
            marginTop: "10px",
            width: "80%",
            paddingBottom: "10px",
          }}
        >
          <tr>
            <td>
              <div style={styleInfo}>Rank:</div>
            </td>
            <td>
              <div style={{ fontSize: "18px", color: "white" }}>
                {info ? info.rank : "-"}
              </div>
            </td>
            <td>
              <div style={{ ...styleInfo, marginLeft: "50px" }}>Score:</div>
            </td>
            <td>
              <div style={{ fontSize: "16px", color: "green" }}>
                {info ? info.score : "0"}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div style={styleInfo}>Award:</div>
            </td>
            <td>
              <img
                src={
                  info.award === "trophy"
                    ? Trophy
                    : info.award === "gold"
                    ? GoldMedal
                    : info.award === "silver"
                    ? SilverMedal
                    : info.award === "bronze"
                    ? BronzeMedal
                    : Like
                }
                height={23}
                width={23}
                alt="Trophy"
              ></img>
            </td>
            <td>
              <div style={{ ...styleInfo, marginLeft: "50px" }}>Status:</div>
            </td>
            <td>
              <div style={{ ...styleStatus, backgroundColor: colorStatus }}>
                {info ? info.status : ""}
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default InfoCard;
