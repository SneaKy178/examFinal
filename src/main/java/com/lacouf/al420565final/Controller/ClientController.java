package com.lacouf.al420565final.Controller;

import com.lacouf.al420565final.ClientFactory;
import com.lacouf.al420565final.Model.Client;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class ClientController {

  List<Client> listClients = ClientFactory.getClients();

  List<Client> listClientsMales = listClients.stream()
                                             .filter(client -> client.getGender().equals("M"))
                                             .collect(Collectors.toList());

  List<Client> listClientsOntariens = listClients.stream()
                                                 .filter(client -> client.getProvince().equals("ON"))
                                                 .collect(Collectors.toList());

  @GetMapping(path = "/clients")
  public ResponseEntity<List<Client>> getAllClients() {
    return new ResponseEntity<>(listClients, HttpStatus.OK);
  }

  @GetMapping(path = "/clients/hommes")
  public ResponseEntity<List<Client>> getAllClientsMale() {
    return new ResponseEntity<>(listClientsMales, HttpStatus.OK);
  }

  @GetMapping(path = "/clients/ontariens")
  public ResponseEntity<List<Client>> getAllClientsOntariens() {
    return new ResponseEntity<>(listClientsOntariens, HttpStatus.OK);
  }




}
