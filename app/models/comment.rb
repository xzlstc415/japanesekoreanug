# model Comment
class Comment < ApplicationRecord
  include Ownership
  
  belongs_to :episode, optional: true, counter_cache: true
  belongs_to :user
  belongs_to :parent_comment, class_name: 'Comment', optional: true
  has_many :replies, class_name: 'Comment', foreign_key: 'parent_comment_id'
end
