# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1)
# BlogPostController Is a class that has multiple methods called by the route
# Controll belongs to Views in MVC since it coordinates the interaction between the user and the views and models. 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # is the controller method that represents R (read) in CRUD. It lists all of the items in a particular model. It is associated with HTTP action verb GET 
    # This method will list all of the posts 
    @posts = BlogPost.all
  end

  # ---3)
  # is the controller methd that representes R in CRUD. It is simmiral to index but it needs a parameter inn order to operate since its only task is to show one specific item. It is associated with HTTP action verb GET. This method will diplay the specific post whose ID mathes the parameter passed in.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # the contorller method that represeetns a halfway point between C and R in CRUD. It is responsible for displaying a form to the user. It is associated with HTTP action verb GET. This method will display a form to a user to enter a new post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # the contorller method that represeetns C (create) in CRUD. It is responsible for adding data to the database. It is associated with HTTP action verb POST. This method will pass newly created post to a dabase.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # the contorller method that represeetns U (udate) in CRUD. It is responsible editing . It is associated with HTTP action verb PUT/PATCH. This method will edit the specific post whose ID matches the parameter passed.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # the contorller method that represeetns U (udate) in CRUD. It is responsible editing . It is associated with HTTP action verb PUT/PATCH. This method will edit the specific post whose ID matches the parameter passed. This method will update only if blog_post_params pass the criteria listed in private method below. At that point params ID will be used to find specific blog. The method will trigger a redirect if the new entry is made successfully
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # the contorller method that represeetns D (delete) in CRUD. It is responsible deleting. It is associated with HTTP action verb delete. This method will delete the specific post whose ID matches the parameter passed. The method will trigger a redirect once deleted.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # Private is a reserved word in Ruby that limits the scope of where a method can be called.This way we made sure this method cannot be called anywhere else in the program.
  private
  def blog_post_params
    # ---10) here we can define what kind of parameters we exepect/can be passed
    params.require(:blog_post).permit(:title, :content)
  end
end
