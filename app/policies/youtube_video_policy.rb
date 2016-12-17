# policy for episodes
class YoutubeVideoPolicy < ApplicationPolicy
  # Scope class inherited from ApplicationPolicy
  # class Scope < Scope
  #   def resolve
  #     if user && user.admin?
  #       scope.includes([similar_episode_group: :episodes],
  #                      :tags,
  #                      :episode_type).all
  #     else
  #       scope.includes([similar_episode_group: :episodes],
  #                      :tags,
  #                      :episode_type).published
  #     end
  #   end
  # end

  def index?
    user.admin? || user.moderator?
  end

  def create?
    user.admin? || user.moderator?
  end

  def update?
    user.admin? || user.moderator?
  end

  def autocomplete?
    user.admin? || user.moderator?
  end
end
