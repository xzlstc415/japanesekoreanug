# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'Yuji Ogasawara',
            password: '123123123',
            email: 'jkug@gmail.com',
            receive_email: true)
user1 = User.create(name: 'Stephanie Hekker', password: "test_password", email: 'test1@email.com')
user2 = User.create(name: 'Thomas Hopkins', password: "test_password", email: 'test2@email.com')
user3 = User.create(name: 'Sourav Kumar', password: "test_password", email: 'test3@email.com')
user4 = User.create(name: 'Référencemen à Marseille', password: "test_password", email: 'test4@email.com')
user5 = User.create(name: 'James Chevalier', password: "test_password", email: 'test5@email.com')
user6 = User.create(name: 'Keil Miller Jr', password: "test_password", email: 'test6@email.com')

beginner_type = EpisodeType.create(name: 'Beginner Episodes')
intermediate_type = EpisodeType.create(name: 'Intermediate Episodes')
advanced_type = EpisodeType.create(name: 'Advanced Episodes')

tag1 = Tag.create(name: 'guide')
tag2 = Tag.create(name: 'bottom')
tag3 = Tag.create(name: 'wave')
tag4 = Tag.create(name: 'warding')

ep1 = Episode.create(number: 1,
                     published_at: DateTime.now - 10.days,
                     name: "LOL講座 - レーン戦終わってからの動き方",
                     starred: false,
                     duration: 11,
                     description: "LOL講座 - レーン戦終わってからの動き方(Bottom lane)",
                     thumbnail_url: "/assets/images/thumbnail1.jpg",
                     episode_type: beginner_type,
                     tags: [tag1, tag2])

ep2 = Episode.create(number: 2,
                     published_at: DateTime.now - 8.days,
                     name: "ウェーブマネージメント講座",
                     starred: false,
                     duration: 5,
                     description: "ウェーブマネージメント講座 (Wave Management)",
                     thumbnail_url: "/assets/images/thumbnail3.jpg",
                     episode_type: intermediate_type,
                     tags: [tag1, tag3, tag2])

ep3 = Episode.create(number: 3,
                     published_at: DateTime.now - 6.days,
                     name: "Warding講座",
                     starred: true,
                     duration: 30,
                     description: "Warding講座(Warding lesson)",
                     thumbnail_url: "/assets/images/thumbnail2.jpg",
                     episode_type: advanced_type,
                     tags: [tag1, tag4])

ep4 = Episode.create(number: 4,
                     published_at: DateTime.now - 2.days,
                     name: "Warding講座2",
                     starred: true,
                     duration: 25,
                     description: "Warding講座2(Warding lesson)",
                     thumbnail_url: "/assets/images/thumbnail2.jpg",
                     episode_type: advanced_type,
                     tags: [tag1, tag4])

ep1.next_episode_id = ep2.id
ep2.previous_episode_id = ep1.id
ep2.next_episode_id = ep3.id
ep3.previous_episode_id = ep2.id
ep3.next_episode_id = ep4.id
ep4.previous_episode_id = ep3.id

SimilarEpisodeGroup.create(name: "test group",
                           episodes: [ep1, ep2, ep3])

comment1 = Comment.create(episode_id: 1,
                          content: "If we're changing our \"foundation_and_overrides.scss\" file, what happens if we update zurb foundation? Will this file be overwritten?",
                          user: user1)

comment2 = Comment.create(episode_id: 1,
                          content: "Simply updating the 'zurb-foundation' gem will not overwrite 'foundation_and_overrides.scss' or any of the other files in your assets folder. However, if you then proceed to run rails generate foundation:install again, it will overwrite 'foundation_and_overrides.scss' (but not without prompting you for confirmation first). That generator will also modify 'application.css', 'application.js', and 'application.html.erb'.",
                          user: user2,
                          parent_comment: comment1)

comment3 = Comment.create(episode_id: 1,
                          content: "hello",
                          user: user3,
                          parent_comment: comment2)

comment4 = Comment.create(episode_id: 1,
                          content: "It's good !",
                          user: user4,
                          parent_comment: comment2)

comment5 = Comment.create(episode_id: 1,
                          content: "I handle this by keeping my edits clean, and in place of the existing options. So, rather than putting all of my customizations in one place in the file, they're spread out in the locations where the options originally appeared.",
                          user: user5,
                          parent_comment: comment1)

comment6 = Comment.create(episode_id: 1,
                          content: "It's best to just browse the gem's github repo for changes. I organize my files a little differently than default, so I don't want those changes over ride.",
                          user: user6,
                          parent_comment: comment1)
