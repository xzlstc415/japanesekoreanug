# model Comment
class Comment < ApplicationRecord
  include Ownership
  before_save :check_if_deleted

  belongs_to :episode, optional: true, counter_cache: true
  belongs_to :user
  belongs_to :parent_comment, class_name: 'Comment', optional: true
  has_many :replies, class_name: 'Comment', foreign_key: 'parent_comment_id'

  def destroy
    update_attributes(content: 'this message has been deleted!', deleted: true)
  end

  private

  def check_if_deleted
    errors.add(:content, message: 'has been deleted') if deleted?
    raise ActiveRecord::RecordInvalid
  end
end
