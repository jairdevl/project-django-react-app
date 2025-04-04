import { useForm } from 'react-hook-form'
import { createTask, deleteTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'

export function TasksFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    await createTask(data);
    navigate("/tasks");
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="title"
          {...register("title", { required: true })} />
        {errors.title && <span>Title is required</span>}
        <textarea rows="3" placeholder="description"
          {...register("description", { required: true })}></textarea>
        {errors.description && <span>Description is required</span>}
        <button>Save</button>
      </form>

      {params.id && <button onClick={async () => {
        const accepted = window.confirm("Are you sure you want to delete this task?");
        if (accepted) {
          await deleteTask(params.id)
          navigate("/tasks");
        }
      }}>Delete</button>}
    </div>

  )
}