class SnacksController < ApplicationController
  before_action :authorized, only: [:buy]

  def index
    @snacks = Snack.all
    render json: @snacks
  end

  def buy
    @snack = Snack.find(params[:id])
    @user_snack = UserSnack.create(snack: @snack, user: @user)
    render json: @user_snack
  end
end
