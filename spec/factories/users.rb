FactoryGirl.define do
  factory :user do
    sequence(:name) { |n| "user_#{n}" }
    avatar_url 'example.com/avatar.jpg'
    role 'user'
    sequence(:email) { |n| "test@email.com_#{n}" }
    password 'password'
  end
end
