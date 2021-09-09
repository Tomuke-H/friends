class Api::MoviesController < ApplicationController
    before_action :set_friend
    before_action :set_movie, only: [:show, :update, :destroy]

    def index
        render json: @friend.movies.all
    end

    def show
        render json: @movie
    end

    def create
        @movie = @friend.movies.new(movies_params)
        if(@movie.save)
            render json: @movie
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end

    def update
        if(@movie.update(movies_params))
            render json: @movie
        else
            render json: @movie.errors.full_messages, status: 422
        end
    end

    def destroy
        render json: @movie.destroy
    end

    private

    def movies_params
        params.require(:movie).permit(:title, :genre)
    end

    def set_friend
        @friend = Friend.find(params[:friend_id])
    end

    def set_movie
        @movie = @friend.movies.find(params[:id])
    end


end
