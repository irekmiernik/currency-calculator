import { useCurrentDate } from "./useCurrentDate";
import { StyleP } from "./styled";

export const Dater = () => {

  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }

  const dateFormat = new Intl.DateTimeFormat(undefined, dateOptions);
  const timeFormat = new Intl.DateTimeFormat(undefined, timeOptions)

  const date = useCurrentDate();

  return (<StyleP $dater>{dateFormat.format(date) + "r. godz. " + timeFormat.format(date)}</StyleP>);
};