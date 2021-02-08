import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Content from "./sacrament-text/content";
import sacram from "./@constants/sacram";
export default class SacrRender extends Component {
  render() {
    return (
      <div className="sacr-container">
        <Switch>
          <Route exact path="/sacraments/baptisim">
            <Content
              txt={sacram.baptisim.txt}
              pic={sacram.baptisim.pic}
              name={sacram.baptisim.name}
            />
          </Route>
          <Route exact path="/sacraments/ConfessionReconsilation">
            <Content
              txt={sacram.confessionReconsilation.txt}
              pic={sacram.confessionReconsilation.pic}
              name={sacram.confessionReconsilation.name}
            />
          </Route>
          <Route exact path="/sacraments/Confirmation">
            <Content
              txt={sacram.confirmation.txt}
              pic={sacram.confirmation.pic}
              name={sacram.confirmation.name}
            />
          </Route>
          <Route exact path="/sacraments/FirstHolyComunnion">
            <Content
              txt={sacram.firstHolyComunnion.txt}
              pic={sacram.firstHolyComunnion.pic}
              name={sacram.firstHolyComunnion.name}
            />
          </Route>
          <Route exact path="/sacraments/HolyOrders">
            <Content
              txt={sacram.holyOrders.txt}
              pic={sacram.holyOrders.pic}
              name={sacram.holyOrders.name}
            />
          </Route>
          <Route exact path="/sacraments/Marriage">
            <Content
              txt={sacram.marriage.txt}
              pic={sacram.marriage.pic}
              name={sacram.marriage.name}
            />
          </Route>
          <Route exact path="/sacraments/AnointingoftheSick">
            <Content
              txt={sacram.anointingoftheSick.txt}
              pic={sacram.anointingoftheSick.pic}
              name={sacram.anointingoftheSick.name}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
