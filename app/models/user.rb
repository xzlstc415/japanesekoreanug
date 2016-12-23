# User Model
class User < ApplicationRecord
  enum role: [:admin, :user, :moderator]

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :trackable, :validatable

  validates :email, uniqueness: true
  validates :name, presence: true

  has_many :starred_episode_users, dependent: :destroy
  has_many :favourite_episodes, through: :starred_episode_users, source: :episode
end
