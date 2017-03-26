FactoryGirl.define do
  factory :youtube_client do
    api_access_token 'access_token'
    api_refresh_token 'refresh_token'
  end
end
