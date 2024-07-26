export class User {
    private name: string;
    private specialized: string;
    private avt: string;                       
    private phone: string;
    private email: string;
    private birthday: string;
    private address: string;
    private education: string;
    private project: string;
    private desProject:string;
    private intro : string
    public constructor(
      name: string,
      avt: string,
      specialized: string,
      phone: string,
      email: string,
      birthday: string,
      address: string,
      education:string,
      project: string,
      desProject:string,
      intro:string,
    ) {
      this.name = name;
      this.avt = avt;
      this.specialized = specialized;
      this.phone = phone;
      this.email = email;
      this.birthday = birthday;
      this.address = address;
      this.education =education;
      this.project = project;
      this.desProject = desProject;
      this.intro = intro;
    }
  }