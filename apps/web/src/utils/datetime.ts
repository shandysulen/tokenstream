interface GetFormattedDateOptions {
  showDay?: boolean;
  showTime?: boolean;
}

/** Takes an ISO 8601 string or UNIX timestamp */
export const getFormattedDate = (
  date: string | number,
  options?: GetFormattedDateOptions,
) =>
  new Date(date).toLocaleDateString(undefined, {
    month: "long",
    day: options?.showDay ? "numeric" : undefined,
    year: "numeric",
    hour: options?.showTime ? "numeric" : undefined,
    minute: options?.showTime ? "numeric" : undefined,
    second: options?.showTime ? "numeric" : undefined,
  });

/**
 * Convert millisecond UNIX timestamp to second timestamp
 *
 * Required for Reservoir start and end timestamp endpoint params
 */
export const convertToSeconds = (timestamp: number) =>
  Math.floor(timestamp / 1000);

/** Get UNIX timestamp (ms) of datetime string */
export const getTimestamp = (datetime: string) => new Date(datetime).getTime();
