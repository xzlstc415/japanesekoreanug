FactoryGirl.define do
  factory :medium do
    medium_type 'icon'
    image File.new("#{Rails.root}/spec/support/fixtures/test.jpg")
  end
end
