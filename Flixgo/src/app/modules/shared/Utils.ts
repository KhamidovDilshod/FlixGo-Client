export class GenericRepository {
  public users = new FakeDb().Users;

  public GetAllUsers(): Array<User> {
    const db: FakeDb = new FakeDb();
    return db.Users;
  }
}

class AuthService {
  constructor(private genericRepository: GenericRepository) {
  }

  //DEPENDENCY INJECTION SIZ
  public registerUsers(): any {
    const repository: GenericRepository = new GenericRepository();
    return repository.users.push(new User(1, "Bobur", "Anvarov", "asda@gmail.com"));
  }


  //DEPENDENCY INJECTION BILAN
  public retrieveAllUsers(): Array<User> {
    return this.genericRepository.GetAllUsers();
  }
}

export class FakeDb {
  Users: Array<User> = new Array<User>();
}

export class User {
  Id: number;
  Name: string;
  Surname: string;
  Email: string;

  constructor(id: number, name: string, surname: string, email: string) {
    this.Id = id;
    this.Name = name;
    this.Surname = surname;
    this.Email = email;
  }
}
