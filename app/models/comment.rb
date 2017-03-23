# model Comment
class Comment < ApplicationRecord
  include Ownership
  before_update :check_if_deleted

  belongs_to :episode, counter_cache: true
  belongs_to :user
  belongs_to :parent_comment, class_name: 'Comment'
  has_many :replies, class_name: 'Comment', foreign_key: 'parent_comment_id'

  scope :root, -> { where('parent_comment_id IS NULL') }

  validates :content, :episode, presence: true

  def destroy
    update_attributes(content: 'this message has been deleted!', deleted: true)
  end

  private

  def check_if_deleted
    if deleted?
      errors.add(:content, message: 'has been deleted')
      raise ActiveRecord::RecordInvalid.new(self), 'comment has been deleted'
    end
  end
end
