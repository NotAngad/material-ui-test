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
          title: "Milestone 1",
          allDay: false,
          start: new Date(),
          end: new Date(
            new Date().setTime(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
          ),
        },
        {
          title: "Milestone 2",
          allDay: false,
          start: new Date().setTime(
            new Date().getTime() + 8 * 24 * 60 * 60 * 1000
          ),
          end: new Date(
            new Date().setTime(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)
          ),
        },
        {
          title: "Milestone 3",
          allDay: false,
          start: new Date().setTime(
            new Date().getTime() + 15 * 24 * 60 * 60 * 1000
          ),
          end: new Date(
            new Date().setTime(new Date().getTime() + 21 * 24 * 60 * 60 * 1000)
          ),
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
