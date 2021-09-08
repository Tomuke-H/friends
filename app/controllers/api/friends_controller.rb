class Api::FriendsController < ApplicationController

#stuff here...
  before_action :set_friends
  before_action :set_friends, only: [show, update, destroy]

  def index
    render json: Friend.all
  end

  def create 
    @friend = Friend.new(friends_params)
    if(@friends.save)
      render json: @friend
    else
      render json: @friend.errors.full_messages, status: 422
  end

  def update
    if(@friend.update(friends_params))
      render json: @friends
    else 
      render json: @friend.errors.full_messages, status: 433
    end
  end

  def destroy
      render json: @movie.destroy
  end
  
  
  privite

  def movies_params
    render
  end

  def friends_params
    params.require(:friends).permit(:name, :age, :sign, :mental_illness)
  end

  def set_friends
    @friend = Friend.find(params[:id])
  end

end
