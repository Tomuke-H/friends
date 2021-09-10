# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Friend.destroy_all

t = Friend.create(name: "Tom", age: 29, sign: "Aries", mental_illness: "video game addiction")
m = Friend.create(name: "Michaela", age: 27, sign: "Aries", mental_illness: "stress eating")
k = Friend.create(name: "Kelsey", age: 31, sign: "Leo", mental_illness: "narcissism")

t.movies.create(title: "Indiana Jones", genre: "Adventure")
t.movies.create(title: "Star Wars", genre: "Sci-fi")

k.movies.create(title: "The Shining", genre: "Thriller")
k.movies.create(title: "Scott Pilgrim Vs. The World", genre: "Comedy")

m.movies.create(title: "Mad Max", genre: "Action")
m.movies.create(title: "Pleasantville", genre: "Drama")