export class Model
{
   public id !:number;
   public modelName !:String;
   public modelType !:String;
   public resource !:String;
   public riskScore !:number;
   public resourceAttribute !:String;
   public eventDesc !:String;

   constructor(model:any){
    this.id = model.id;
    this.modelName = model.modelName;
    this.modelType = model.modelType;
    this.resource = model.resource;
    this.riskScore = model.riskScore;
    this.resourceAttribute = model.resourceAttribute;
    this.eventDesc = model.eventDesc;
   }

  public static create(modelData:any){
    return new Model(modelData);
   }
}