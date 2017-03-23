FactoryGirl.define do
  factory :comment do
    sequence(:content) { |n| "comment_#{n}" }
    association :episode

    factory :comment_with_parent do
      after(:build) do |comment|
        comment.parent_comment = create(:comment)
      end
    end
  end
end
