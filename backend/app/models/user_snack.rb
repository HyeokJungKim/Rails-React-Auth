class UserSnack < ApplicationRecord
  belongs_to :user
  belongs_to :snack

  def name
    snack.name
  end
end
