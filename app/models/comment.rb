# model Comment
class Comment < ApplicationRecord
  belongs_to :episdoe, optional: true
  belongs_to :user, optional: true
  belongs_to :parent_comment, class_name: 'Comment', optional: true
  has_many :replies, class_name: 'Comment', foreign_key: 'parent_comment_id'
end
