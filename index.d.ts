export enum SCEPluginTypes {
  LANGUAGE = 'SCE_LANGUAGE',
}

export interface SceLocation {
  href: string;
}

export interface SceEvent {
  eventName: string;
  location: SceLocation;
}

export type SCECodeGenTypeContainer = {
  SCEPlugin: SCECodeGenType;
};
export type SCECodeGenType = new () => SceMain;

export interface SCEPluginElement {
  url: string;
  code: string;
  dateCreated: string;
  pluginName: string;
  pluginType: string;
  plugin: Object;
}

/**
 * Main interface to the code generation plugin.
 *
 * @export
 * @abstract
 * @class SceMain
 */
export abstract class SceMain {
  static pluginName: string;
  static pluginType: string;

  /**
   * Set the sequence of events that we're generating code for.
   *
   * @abstract
   * @memberof SceMain
   */
  abstract setEvents(ev: SceEvent[]): void;

  /**
   * Get RAW generated code.
   *
   * @memberof SceMain The generated code in no particular format.
   */
  abstract getRawGeneratedCode(): string;

  /**
   * Get formatted code.
   *
   * @abstract
   * @returns {string} The generated code, styled and formatted.
   * @memberof SceMain
   */
  abstract getStyledGeneratedCode(): string;
}