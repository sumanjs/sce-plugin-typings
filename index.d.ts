export enum SCEPluginTypes {
  LANGUAGE = 'SCE_LANGUAGE'
}

export interface SceEvent {

}

export type SCECodeGenTypeContainer = {
  SCEPlugin: SCECodeGenType
}
export type SCECodeGenType = new() => SceMain;

export interface Updateable {
  updateCode: () => any;
}

export interface SCEPluginElement {
  url: string,
  code: string,
  dateCreated: string,
  pluginName: string,
  pluginType: string,
  plugin: Object
}

export abstract class SceMain {
  
  static pluginName: string;
  static pluginType: string;
  
  initialize: () => void;
  
  onComplete: (x: Updateable) => void;
  
  onNextEvent: (ev: SceEvent, x: Updateable) => void;
  
  getRawGeneratedCode: () => string;
  
  getStyledGeneratedCode: () => string;
  
}

// declare enum Foods {
//   CHERRY = 'CHERRY',
//   LETTUCE = 'LETTUCE',
//   JERKY = 'JERKY'
// }
//
//
// declare abstract class ForceFoods {
//   static food : Foods
// }
//
//
