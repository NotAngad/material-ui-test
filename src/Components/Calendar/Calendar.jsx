import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const eventStyleGetter = function () {
  var style = {
    background: "#f50057",
    borderRadius: "10px",
    opacity: 1,
    color: "#fff",
    border: "0px",
    display: "block",
    padding: "2px 10px",
    outline: "none",
  };
  return {
    style: style,
  };
};

const CalendarComponent = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={[
        {
          title: "Event hai aaj",
          allDay: false,
          start: new Date(),
          end: new Date(),
        },
      ]}
      eventPropGetter={eventStyleGetter}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarComponent;
