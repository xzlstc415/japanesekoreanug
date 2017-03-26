FactoryGirl.define do
  factory :twitch_user do
    sequence(:api_access_token) { |n| "access_token_#{n}" }
    sequence(:api_name) { |n| "twitch_user_#{n}" }
    api_logo "logo"
    sequence(:api_id) { |n| "api_id_#{n}" }
    association :user
  end
end
