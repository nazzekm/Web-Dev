from models.animal_base import Animal
from models.cat_model import Cat
from models.dog_model import Dog

a1 = Animal("Aina", 42, "tiger")
c1 = Cat("Maya", 3, "girl")
d1 = Dog("Aktos", 5, "dense")

objects = [a1, c1, d1]

for o in objects:
    print(o)          
    print(o.speak())   
    print(o.get_name())
    print(o.get_kind())
    print("-----")


print(a1.get_kind())