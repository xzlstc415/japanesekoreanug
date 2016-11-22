# policy for comments
class CommentPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    true
  end

  def update?
    user == record.user
  end

  def destroy?
    user == record.user
  end
end
