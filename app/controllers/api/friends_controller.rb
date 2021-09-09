class Api::FriendsController < ApplicationController

    before_action :set_friend, only: [:show, :update, :destroy]

    def index
        render json: Friend.all
    end

    def show
        render json: @friend
    end

    def create
        @friend = Friend.new(friends_params)
        if(@friend.save)
            render json: @friend
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        if(@friend.update(friends_params))
            render json: @friend
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        render json: @friend.destroy
    end

    private

    def friends_params
        params.require(:friend).permit(:name, :age, :sign, :mental_illness)
    end

    def set_friend
        @friend = Friend.find(params[:id])
    end

end
