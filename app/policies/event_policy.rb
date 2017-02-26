# policy for comments
class CommentPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    user.admin? || user.moderator?
  end

  def update?
    user.admin? || user.moderator?
  end

  def destroy?
    user.admin? || user.moderator?
  end
end
