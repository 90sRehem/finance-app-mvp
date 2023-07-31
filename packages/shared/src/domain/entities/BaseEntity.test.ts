import { Guid } from "../value-objects/Guid";
import { BaseEntity } from "./BaseEntity";

type TesteEntityProps = {
  foo: string;
};

class TestEntity extends BaseEntity<TesteEntityProps> {
  public get foo(): string {
    return this._props.foo;
  }

  public set foo(value: string) {
    this._props.foo = value;
    this.touch();
  }
}

let entity: TestEntity;
const props = { foo: "bar" };

describe("BaseEntity tests", () => {
  beforeAll(() => {
    entity = new TestEntity(props);
  });

  it("should create a new entity with given id", () => {
    const id = new Guid("123");
    const entityWithId = new TestEntity(props, id);

    expect(entityWithId.id).toBe(id);
    expect(entityWithId.foo).toBe(props.foo);
    expect(entityWithId.createdAt).toBeInstanceOf(Date);
  });

  it("should generate a new id if one is not provided", () => {
    expect(entity).toHaveProperty("id");
  });

  it("should update updatedAt property when update some value", () => {
    entity.foo = "baz";
    expect(entity.updatedAt).not.toBeUndefined();
  });

  it("should return true if two entities are equal", () => {
    const id = Guid.create();
    const entity1 = new TestEntity(props, id);
    const entity2 = new TestEntity(props, id);

    const result = entity1.equals(entity2);

    expect(result).toBe(true);
  });

  it("should return false if the entities are not equal", () => {
    const entity1 = new TestEntity(props, new Guid("123"));
    const entity2 = new TestEntity(props, new Guid("456"));

    const result = entity1.equals(entity2);

    expect(result).toBe(false);
  });
});
