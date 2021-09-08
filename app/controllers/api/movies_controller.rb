class Api::MoviesController < ApplicationController

before_action :set_friend
before_action :set_movie, only: [:show, :update, :destroy]

  def index
    render json: @friend.movie.all
  end

  def create
    @movie = @friend.new(movies_params)
    if(@movie.save)
      render json: @mvoie
    else
      render json: @movie.errors.full_messages, status: 422
    end
  end

  def show
    render json: @movie
  end

  def update
    if(@movie.update(moviess_params))
      render json: @movie
    else
      render json: @movie.errors.full_message, status: 422
    end
  end

  def destroy
    render json: @movie.destroy
  end

  private

  def movies_params
    params.require(:movies).permit(:title, :genre)
  end

  def friends_param
    params.require(:friends).permit(:name, :age, :sign, :mental_illness)
  end

  def set_friend
    @friend = Friend.find(params[:id])
  end


  def set_movie
    @movie = @friend.movies.find(params[:id])
  end

end
