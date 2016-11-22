# User Model
class User < ApplicationRecord
  enum role: [:admin, :user, :moderator]

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :trackable, :validatable

  validates :email, uniqueness: true
  validates :name, presence: true
end
