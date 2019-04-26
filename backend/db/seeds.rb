eric = User.create(username: "eric", password: "123", money: 10)
tony = User.create(username: "tony", password: "123", money: 50000)

5.times do
  Snack.create(name: Faker::Dessert.variety, cost: rand(1..10))
end
5.times do
  Snack.create(name: Faker::Dessert.topping, cost: rand(1..10) )
end
5.times do
  Snack.create(name: Faker::Food.vegetables, cost: rand(1..10))
end
5.times do
  Snack.create(name: Faker::Food.fruits, cost: rand(1..10))
end

(1..10).to_a.each do |num|
  UserSnack.create(user: eric, snack_id: num)
end

(11..20).to_a.each do |num|
  UserSnack.create(user: tony, snack_id: num)
end
