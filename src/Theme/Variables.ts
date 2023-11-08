/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
// export enum Colors {
//   TRANSPARENT = "rgba(0,0,0,0)",
//   INPUT_BACKGROUND = "#FFFFFF",
//   WHITE = "#ffffff",
//   TEXT = "#212529",
//   PRIMARY = "#E14032",
//   SUCCESS = "#28a745",
//   ERROR = "#dc3545",
// }
export enum Colors {
  TRANSPARENT = "rgba(0,0,0,0)",
  INPUT_BACKGROUND = "#FFFFFF",
  WHITE = "#ffffff",
  BOTTOM_NAVIGATION = "#D9D9D9",
  HIGHLIGHT_TEXT = "#0D986A",
  BOLD_BACKGROUND = "#8BA889",
  NORMAL_BACKGROUND = "#BFCFC4",
  AVT_BACKGROUND = "#E9F3ED",
  BOLD_BUTTON= "#416D50",
  SEMI_TITLE = "#435B71"
}
// export enum NavigationColors {
//   PRIMARY = Colors.PRIMARY,
// }

/**
 * FontSize
 */
export enum FontSize {
  TINY = 12,
  SMALL = 16,
  REGULAR = 20,
  SEMI_TITLE = 22,
  TITLE = 25,
  LARGE = 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

export enum MetricsSizes {
  TINY = tiny,
  SMALL = small,
  REGULAR = regular,
  LARGE = large,
}
