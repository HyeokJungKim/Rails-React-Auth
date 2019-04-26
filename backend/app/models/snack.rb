class Snack < ApplicationRecord
  has_many :user_snacks
  has_many :users, through: :user_snacks
end
