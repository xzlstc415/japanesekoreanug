# StarredEpisodeUsersController
class StarredEpisodeUsersController < ApplicationController
  before_action :authenticate_auth_user!, only: [:create, :destroy]

  def create
    episode = Episode.find(starred_episode_user_params[:episode_id])
    @starred_episode_user = StarredEpisodeUser.new(user: current_auth_user,
                                                   episode: episode)
    if @starred_episode_user.save
      head :created
    else
      render json: { errors: @starred_episode_user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    episode = Episode.find(params[:id])
    @starred_episode_user = StarredEpisodeUser.find_by(user: current_auth_user,
                                                       episode: episode)
    @starred_episode_user.destroy! if @starred_episode_user.present?
    head :ok
  end

  private

  def starred_episode_user_params
    params.require(:starred_episode_user).permit(:episode_id)
  end
end
