import { useForm } from 'react-hook-form';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function WidgetForm({ mode, widget, onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      _id: widget._id,
      label: widget.label,
      status: widget.status,
      tags: widget.tags,
    },
  });

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ minWidth: '700px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Widget</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id="_id" className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                {...register('_id', { required: 'ID is required' })}
              />
            </Form.Group>
            <Form.Group id="label" className="mb-3">
              <Form.Label htmlFor="label">Label</Form.Label>
              <Form.Control
                type="text"
                {...register('label', { required: 'LABEL is required' })}
              />
            </Form.Group>
            <Form.Group id="status" className="mb-3">
              <Form.Label htmlFor="status">Status</Form.Label>
              <Form.Select aria-label="Widget Status" {...register('status')}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            <Form.Group id="tags" className="mb-3">
              <Form.Label htmlFor="label">Tags</Form.Label>
              <Form.Control
                type="text"
                {...register('tags', {
                  validate: {
                    testXXX: value => {
                      const isValid = value
                        .split(',')
                        .map(tag => tag.trim())
                        .find(tag => tag === 'xxx')
                        ? 'xxx in not allowed'
                        : true;
                      console.log('isValid: ', isValid);
                      return isValid;
                    },
                  },
                })}
              />
              {errors['tags'] && <p>{errors['tags']?.message}</p>}

              <Form.Text className="text-muted">
                comma separated, spaces ignored
              </Form.Text>
            </Form.Group>
            <Stack direction="horizontal" gap={2}>
              <Button className="me-auto w-100" type="submit">
                Update
              </Button>
              <Button variant="secondary">Cancel</Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
