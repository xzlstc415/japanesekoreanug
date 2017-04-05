# policy for comments
class MediumPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    user.admin? || user.moderator?
  end

  def destroy?
    user.admin? || user.moderator?
  end
end
